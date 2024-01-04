const loadUser = () => {
    fetch('https://fakestoreapi.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

const displayUsers = (users) => {
    console.log(users);
    users.forEach(user => {
        const userContainer = document.getElementById('userContainer')
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Name: ${user.name.firstname} ${user.name.lastname}</h5>
                <p class="m-0">Email: ${user.email}</p>
                <p class="m-0">Phone: ${user.phone}</p>
                <a class="btn btn-dark btn-sm w-100 mt-3" href="details.html?userId=${user.id}">See Details</a>
            </div>
        </div>
        `
        userContainer.appendChild(div)
    });
}

const getparams = () => {
    const param = new URLSearchParams(window.location.search).get("userId");
    fetch(`https://fakestoreapi.com/users/${param}`)
    .then(res=>res.json())
    .then(user => {
        const userDetails = document.getElementById('userDetails')
        userDetails.innerHTML = `
        <div class="card-header">User Details</div>
        <div class="card-body">
            <h5 class="card-title">Name: ${user.name.firstname} ${user.name.lastname}</h5>
            <p class="m-0">Email: ${user.email}</p>
                <p class="m-0">Phone: ${user.phone}</p>
            <p class="m-0">Address: ${user.address.street}, ${user.address.city}</p>
            <p class="m-0">Zip Code: ${user.address.zipcode}</p>
        </div>
        `
    })
}

loadUser()
getparams()