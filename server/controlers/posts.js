const PostMessage = require("../models/postMessage");
const mongoose = require("mongoose");

exports.getPosts = async (req, res) => {
  try {
    const postsMessage = await PostMessage.find();
    res.status(200).json(postsMessage);
  } catch (error) {
    res.status(404).send({ Message: error.message });
  }
};

exports.createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).send({ Message: error.message });
  }
};

//req : posts/14588    posts/id
exports.updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send({ Message: "No post with that id" });
  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );
  res.json(updatedPost);
};
exports.deletePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send({ Message: "No post with that id" });
  await PostMessage.findByIdAndRemove(_id);
  res.json({ Message: "Delete with sucess" });
};

exports.likePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send({ Message: "No post with that id" });
  const post = await PostMessage.findById(_id);
  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { likeCount: post.likeCount + 1 },
    {
      new: true,
    }
  );
  res.json(updatedPost);
};
