function getContacats() {
    fetch('api.php')
        .then(response => response.json())
        .then(data => {
            let contacts = '';
            data.forEach(contact => {
                contacts += `
                    <div class="contact">
                        <div class="contactData">
                            ${contact.name} - ${contact.email}
                            <div class="actions">
                                <button class="edit-button" onclick="editContact(${contact.id})">Edit</button>
                                <button class="delete-button" onclick="deleteContact(${contact.id})">Delete</button>
                            </div>
                        </div>
                    </div>
                `;
            });
            document.getElementById('contacts').innerHTML = contacts;
        });
}

function addContact(name, email) {
    fetch('api.php', {
        menthod: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify({ name, email })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('addContactForm').reset();
            getContacats();
        });
    }

function deleteContact(id) {
    fetch(`api.php?id=${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        getContacats();
    });
}

function editContact(id) {
    fetch(`api1.php?id=${id}`)
        .then(response => response.json())
        .then(data => {
            const contact = data;
            document.getElementById('name').value = contact.name;
            document.getElementById('email').value = contact.email;

            document.getElementById('addButton').style.display = 'none';

            const updateButton = document.getElementById('updateButton');
            updateButton.style.display = 'block';
            updateButton.dataset.id = id;
            updateButton.onclick = () => updateContact(id);
        })
}

function updateContact(id) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('emial').value;

    fetch(`api.php?id=${id}`, {
        method: 'PUT' ,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
    })

    .then(response => {
        if (response.ok) {
            document.getElementById('addContactForm').reset();

            document.getElementById('addButton').style.display = 'block';
            document.getElementById('updateButton').style.display = 'none';
            getContacats();
        } else {
            throw new Error('Gagal memperbarui kontak.');
        }
    })
}

document.getElementById('addContactForm').addEventListener('submit',
    function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        const addButton = document.getElementById('addButton');
        if (addButton.innerText === 'update') {
            const id = addButton.dataset.id;
            updateContact(id);
            alert("Kontak Berhasil Diupdate");
            console.log('masuk addbutton update 1')
        } else {
            alert("Kontak Berhasil Ditambahkan!");
            addContact(name, email);
            console.log('masuk addbutton add 1')
        }
});

document.getElementById('contacts').addEventListener('click', function(e){
    if (e.target && e.target.classList.contains('delete-button')) {
        const id = e.target.dataset.id;
        deleteContact(id);
        alert("Kontak Berhasil Dihapus!");
    }
});

document.addEventListener('DOMContentLoaded', function(){
    getContacats();
});


