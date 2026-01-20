import jsPDF from "jspdf";

export const generatePDF = (data) => {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("INVOICE", 80, 20);

  doc.setFontSize(12);
  doc.text(`Name: ${data.name}`, 20, 50);
  doc.text(`Email: ${data.email}`, 20, 60);
  doc.text(`Amount Paid: ₹${data.amount}`, 20, 70);
  doc.text("Payment Status: SUCCESS", 20, 80);

  doc.text("Thank you for shopping ❤️", 20, 100);

  doc.save("invoice.pdf");
};
