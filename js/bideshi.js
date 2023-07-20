const profile = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => profileInfo(data.results))
}
const profileInfo = info => {
    const userInfo = document.getElementById('user-info');
    for (const user of info) {

        const div = document.createElement('div');

        div.classList.add('users')
        div.innerHTML = `
    <h3>User  Name : ${user.name.title} ${user.name.first} ${user.name.last}</h3>
    <p> Location: ${user.location.city},${user.location.state}</p>;
    `
        userInfo.appendChild(div);
    }
}

profile();