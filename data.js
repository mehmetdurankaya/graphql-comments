const users = [
  {
    id: "1",
    fullName: "Mehmet Duran Kaya",
  },
  {
    id: "2",
    fullName: "Turan Kaya",
  },
];
const posts = [
  {
    id: "1",
    title: "Mehmet Duran Kaya'nın gönderisi",
    user_id: "1",
  },
  {
    id: "2",
    title: "Mehmet Duran Kaya'nın diğer gönderisi",
    user_id: "1",
  },
  {
    id: "3",
    title: "Turan Kaya'nın gönderisi",
    user_id: "2",
  },
  {
    id: "4",
    title: "Turan Kaya'nın diğer gönderisi",
    user_id: "2",
  },
];
const comments = [
  {
    id: "1",
    text: "lorem ipsum",
    post_id: "1",
    user_id: "2",
  },
  {
    id: "2",
    text: "lorem ipsum doler",
    post_id: "1",
    user_id: "1",
  },
  {
    id: "3",
    text: "foo bar",
    post_id: "2",
    user_id: "1",
  },
  {
    id: "4",
    text: "foo bar baz",
    post_id: "3",
    user_id: "2",
  },
];

module.exports = {
  users,
  posts,
  comments
}
