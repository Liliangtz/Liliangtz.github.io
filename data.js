$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function (data) {
        console.log('Datos ficticios >>> ', data)
        const persona = data.results[0];
        document.getElementById("foto-perfil").src = persona.picture.large;
        document.getElementById("nombre").innerHTML = `${persona.name.first} ${persona.name.last}`;
        /**document.getElementById("nacionalidad").innerHTML = persona.location.country;
        document.getElementById("fechaNacimiento").innerHTML = persona.dob.date;
        document.getElementById("email").innerHTML = persona.email;
        document.getElementById("telefono").innerHTML = persona.phone;*/
    }
});