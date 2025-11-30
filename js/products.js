const products = [
  { id: "P001", name: "Eco Toaster 3000" },
  { id: "P002", name: "Smart Blender X" },
  { id: "P003", name: "Ultra Kettle Z" },
  { id: "P004", name: "Compact Coffee Pro" },
  { id: "P005", name: "Air Fryer Lite" }
];

function populateProductSelect(selectId = 'product') {
  const select = document.getElementById(selectId);
  if (!select) return;
  products.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.name; 
    opt.textContent = p.name;
    select.appendChild(opt);
  });
}

