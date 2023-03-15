function LikeModel(id, title, isLike) {
  this.id = id;
  this.title = title;
  this.isLike = isLike;

  return {
    id,
    title,
    isLike
  };
}

export default LikeModel;
