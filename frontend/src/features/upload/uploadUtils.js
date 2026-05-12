export const formatFileSize = (bytes) => {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
};

export const createFileObject = (file) => {
  return {
    id: crypto.randomUUID(),

    name: file.name,

    size: file.size,

    type: file.type,
  };
};