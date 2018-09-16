var greetings = ["Hello", "Hey", "Hi there", "Hi", "Hiya", "How are things", "How's life", "What's new", "What's up", "Yo", "\u4F60\u597D", "\u548B\u5566", "\u5E72\u5565\u561E", "\u5403\u996D\u54A9", "\u563F!", "\u4F60\u5403\u4E86\u5417?", "\u5728\u54EA\u53D1\u8D22?", "\u4F60\u597D\u5417"];
export function say() {
  return greetings[random()];
}
export var random = function random() {
  return Math.floor(Math.random() * greetings.length);
};
export default say;
