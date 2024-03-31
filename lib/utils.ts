export const getThumbnailUrl = (url: string) => {
  const matchResult = url.match(/\/file\/d\/([^/]+)\//);
  if (matchResult && matchResult[1]) {
    const fileId = matchResult[1];
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
  } else {
    // Handle the case where the regex match was not found
    throw new Error("File ID not found in URL");
  }
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "2-digit" };
  return date.toLocaleDateString("en-US", options);
};
