export const youtubeIdExtractor = url => {
  if (!url) return false;
  let youtubeUrl = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  return (url.match(youtubeUrl)) ? RegExp.$1 : false;
};


// Credits to eyecatchUp on stack overflow
