// ----- Sprogvælger -----

select_element = document.getElementById("kategoriVælger");
let kategori = ["Kategori", "Sport", "Fest", "Foredrag", "Karriere", "Hobby",];


// Udvider option-boks baseret på antal sprog i array'et og sætter første sprog i array'et som det valgte
for (let i = 0; i < kategori.length; i++) {
    let opt = kategori[i];
    if (i == 0)
        select_element.innerHTML += "<option value=\"" + opt + "\" selected>" + opt + "</option>";
    else
        select_element.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
}
