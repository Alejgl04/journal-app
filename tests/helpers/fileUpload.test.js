import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';

cloudinary.config({
  cloud_name: 'dpn3mhrlz',
  api_key: '324979318663663',
  api_secret: '1-9U83LdIEskEBKuIwYcPtnj66E',
  secure: true
})

describe('Testing on FileUpload', () => {

  test('must upload the file on cloudinary', async() => {

    const imageUrl = 'https://www.explore.com/img/gallery/the-50-most-incredible-landscapes-in-the-whole-entire-world/intro-1672072042.jpg';
    const response = await fetch( imageUrl );
    const blob = await response.blob();
    const file = new File([blob], 'photo.jpg')

    const url = await fileUpload( file );
    expect( typeof url ).toBe('string');

    const segmentsUrl = url.split('/');
    const imageId = segmentsUrl[segmentsUrl.length - 1 ].replace('.jpg','');
    await cloudinary.api.delete_resources([ 'journal-app/' + imageId ]);

  });

  test('must be return null', async() => {
    const file = new File([], 'photo.jpg')
    const url = await fileUpload( file );
    expect( url ).toBe( null );
  });

});