const container = document.querySelector(".container");

for (i = 0; i < 16; i++) {
  const row = document.createElement("div");
  row.style.display = "flex";
  for (j = 0; j < 16; j++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.border = "1px groove lightgray";
    box.style.width = "51px";
    box.style.height = "51px";
        box.addEventListener('mouseover', () => {
              box.addEventListener('mousedown', () => {
                    
                    box.classList.add('painted');
             })
       })
    

    row.appendChild(box);
  }

  container.appendChild(row);
}


