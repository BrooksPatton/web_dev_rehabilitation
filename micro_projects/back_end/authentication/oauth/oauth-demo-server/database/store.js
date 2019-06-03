function Database() {
  const users = [];
  let currentId = 0;

  const add = ({ githubAccount }) => {
    const user = {
      id: currentId + 1,
      githubAccount
    };

    users.push(user);
    currentId += 1;

    return user.id;
  };

  return {
    add
  };
}

module.exports = Database();
