
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';







// Function to format the recipe text
export const formatRecipe = (text) => {
    const sections = text.split('\n\n');
    const formatted = sections.map((section, idx) => {
      if (section.startsWith('Ingredients:')) {
        return (
          <div key={idx}>
            <h3>Ingredients:</h3>
            <ul>
              {section
                .replace('Ingredients:', '')
                .split('\n- ')
                .filter(item => item.trim())
                .map((item, i) => <li key={i}>{item.trim()}</li>)}
            </ul>
          </div>
        );
      } else if (section.startsWith('Instructions:')) {
        return (
          <div key={idx}>
            <h3>Instructions:</h3>
            <ol>
              {section
                .replace('Instructions:', '')
                .split('\nStep ')
                .filter(item => item.trim())
                .map((item, i) => <li key={i}>{item.replace(/\d+:/, '').trim()}</li>)}
            </ol>
          </div>
        );
      } else {
        return <p key={idx}>{section}</p>;
      }
    });
    return formatted;
  };


  // Function to download the recipe as a PDF
export const downloadPDF = (data) => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    let currentY = 10; // Y position for the content

    // Load the image from URL
    const img = new Image();
    img.src = data.image_url;

    img.onload = async () => {
        // Scale down the image size
        const imgWidth = pdfWidth / 2; // Make the image smaller
        const imgHeight = (img.height * imgWidth) / img.width;
        if (currentY + imgHeight > pdfHeight) {
            pdf.addPage();
            currentY = 10; // Reset Y position for new page
        }

        // Add the image to the PDF
        pdf.addImage(img.src, 'PNG', (pdfWidth - imgWidth) / 2, currentY, imgWidth, imgHeight);
        currentY += imgHeight + 10; // Update Y position

        // Set the text size and font
        pdf.setFontSize(12);
        pdf.setFont("helvetica");

        // Add the recipe text
        pdf.setFontSize(16);
        pdf.text(10, currentY, 'Recipe:');
        pdf.setFontSize(12);
        const lines = pdf.splitTextToSize(data.recipe, pdfWidth - 20);
        lines.forEach((line, index) => {
            if (currentY + 7 * (index + 1) > pdfHeight) { // 7 for smaller line height
                pdf.addPage();
                currentY = 10;
            }
            pdf.text(10, currentY + 7 * (index + 1), line); // 7 for smaller line height
        });

        // Save the PDF
        pdf.save('recipe.pdf');
    };
};