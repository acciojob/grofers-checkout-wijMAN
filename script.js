const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let a = document.getElementsByClassName("price");
  let b = 0;

  let z = Array.from(a);
  z.forEach(function (item) {
    b += parseInt(item.innerHTML);
  });

  //   for (let i = 0; i < a.length; i++) {
  //     b += parseInt(a[i].innerHTML);
  //   }
  document.querySelector("table").innerHTML += `
    <tr id="ans">
      <td>${b}</td>
    </tr>
  `;
  getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);

