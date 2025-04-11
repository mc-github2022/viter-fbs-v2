// Export the Subscribers List
export const handleExportSubscribers = (dataExport) => {
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

  let str = "Email, Audience, Subscribe Date";
  // EARNINGS
  dataExport?.map((item) => {
    str +=
      "\n" +
      `${item.subscriber_email}`
        .replaceAll(/,/g, " ")
        .replaceAll(/(\r\n|\n|\r)/g, " ") +
      "," +
      `${item.audience_name}`
        .replaceAll(/,/g, " ")
        .replaceAll(/(\r\n|\n|\r)/g, " ") +
      "," +
      `${formatDate(item.subscriber_created)}`
        .replaceAll(/,/g, " ")
        .replaceAll(/(\r\n|\n|\r)/g, " ");
  });

  const data = str;
  const fileName = `Export Subscribers List - (${formatDate(getDateNow())})`;

  return saveData(data, fileName);
};
