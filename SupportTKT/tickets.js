const tickets = [];
let editingTicketNo = null;

function addTicket() {
  const ticketNo = document.getElementById("tkt_no").value;
  const ticketTitle = document.getElementById("tkt_title").value;
  const ticketDesc = document.getElementById("tkt_desc").value;

  if (ticketNo && ticketTitle && ticketDesc) {
    const existingTicketIndex = tickets.findIndex((ticket) => ticket.no === ticketNo);
    if (existingTicketIndex !== -1 && existingTicketIndex !== editingTicketNo) {
      alert("Ticket number already exists. Please enter a unique ticket number.");
      return;
    }

    if (editingTicketNo !== null) {
      tickets[editingTicketNo] = {
        no: ticketNo,
        title: ticketTitle,
        description: ticketDesc,
      };
      editingTicketNo = null;
    } else {
      const ticket = {
        no: ticketNo,
        title: ticketTitle,
        description: ticketDesc,
      };
      tickets.push(ticket);
    }

    displayTickets();
    clearInputFields();
  } else {
    alert("Please fill all the required fields");
  }
}

function clearInputFields() {
  document.getElementById("tkt_no").value = "";
  document.getElementById("tkt_title").value = "";
  document.getElementById("tkt_desc").value = "";

  document.getElementById("tkt_no").readOnly = false;

  editingTicketNo = null;
  document.getElementById("submit").textContent = "Add Ticket";
}

function editTicket(ticketNo) {
  const existingTicketIndex = tickets.findIndex((ticket) => ticket.no === ticketNo);
  if (existingTicketIndex !== -1) {
    const ticket = tickets[existingTicketIndex];

    document.getElementById("tkt_no").value = ticket.no;
    document.getElementById("tkt_title").value = ticket.title;
    document.getElementById("tkt_desc").value = ticket.description;

    document.getElementById("tkt_no").readOnly = true;

    editingTicketNo = existingTicketIndex;
    document.getElementById("submit").textContent = "Update";
  }
}

function deleteTicket(index) {
  tickets.splice(index, 1);
  alert("Are you sure you want to delete this?");
  displayTickets();
}

function createTableRow() {
  return document.createElement("tr");
}

document.getElementById("submit").addEventListener("click", addTicket);

function displayTickets() {
  const displayBody = document.getElementById("display");
  displayBody.innerHTML = "";

  tickets.forEach((ticket, index) => {
    const row = createTableRow();

    row.innerHTML += `
      <td>${ticket.no}</td>
      <td>${ticket.title}</td>
      <td>${ticket.description}</td>
      <td>
        <button onclick="editTicket('${ticket.no}')">Edit</button>
        <button onclick="deleteTicket(${index})">Delete</button>
      </td>
    `;

    displayBody.appendChild(row);
  });
}