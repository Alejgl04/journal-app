

export const fileUpload = async( file ) => {

  if ( !file ) throw new Error(`No file found`);

  const cloudUrl = 'https://api.cloudinary.com/v1_1/dpn3mhrlz/upload';
  const formData = new FormData();

  formData.append('upload_preset', 'react-journal-app');
  formData.append('file', file);

  try {

    const response = await fetch( cloudUrl, {
      method: 'POST',
      body: formData
    });

    if ( !response.ok ) throw new Error(`Something went wrong, could not uploaded the image`);
    const cloudResponse = await response.json();

    return cloudResponse.secure_url;

  } catch (error) {
    console.log(error);
    throw new Error(`${error.message}`);
  }

}