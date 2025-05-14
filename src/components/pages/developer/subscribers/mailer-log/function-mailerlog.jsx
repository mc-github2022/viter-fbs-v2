import { formatDate, getDateNow } from "../../../../helpers/functions-general";

// Export the Mailer Log List
export const handleExportMailerLog = (dataExport) => {
  const saveData = (data, fileName) => {
    let a = document.createElement("a");
    const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
    const blob = new Blob([bom, data], { type: "text/csv;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  let str = "Email, Subject, Sent Date";
  // EARNINGS
  dataExport?.map((item) => {
    str +=
      "\n" +
      `${item.sending_email_log_email}`
        .replaceAll(/,/g, " ")
        .replaceAll(/(\r\n|\n|\r)/g, " ") +
      "," +
      `${item.sending_email_log_subject}`
        .replaceAll(/,/g, " ")
        .replaceAll(/(\r\n|\n|\r)/g, " ") +
      "," +
      `${formatDate(item.sending_email_log_created)}`
        .replaceAll(/,/g, " ")
        .replaceAll(/(\r\n|\n|\r)/g, " ");
  });

  const data = str;
  const fileName = `Export Mailer Log List - (${formatDate(getDateNow())})`;

  return saveData(data, fileName);
};
