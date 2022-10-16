#!/usr/bin/env node -r esm
import fs from 'fs'
import { normalize } from 'path'

import {GoogleAuth} from 'google-auth-library';
import {google} from 'googleapis';
import  Papa  from 'papaparse';




fs.readFile('../src/lib/data/artist.tsv','utf-8', function(err, data) {
  let artists = Papa.parse(data, {
    header:true,
  });

  let firstArtist = artists.data[3]

  getPortrait(firstArtist.headshot_link,firstArtist.uni_email);

  // artists.data.map(artist => {
  //   let headshot = artist.headshot_link;
  //   getPortrait(headshot, artist.uni_email);

  // })
});


//loop through each artist to get url's
// artists.map(artist => {
//     let headshot = artist.headshot_link;

//     getPortrait(headshot, artist.pref_name)
//     // let headshotAlt = artist.headshot_txt;
//     let urls = artist.images_link.split(",");
//     // let alts = [artist.img1_txt, artist.img2_txt, artist.img3_txt];
// })
//use the url's to access the photos in drive

//save the photos to file in the repo, keeping track of who's they are



const getPortrait = async (portraitUrl, preferredName) => {
  if (!portraitUrl) return

  console.log(`Getting portrait pic for ${preferredName}`)

  let bioPicsDir = `../static/img/bios/${preferredName}`;
  const fileId = portraitUrl.replace('https://drive.google.com/open?id=', '')

  let bioPicDest = fs.createWriteStream(bioPicsDir);

  const auth = new GoogleAuth({scopes: 'https://www.googleapis.com/auth/drive'});
  const service = google.drive({version: 'v3', auth});

  try {

    console.log(fileId);
    const file = await service.files.get({
      fileId: fileId,
      alt: 'media',
    });
    console.log(file);

    if (file.headers['content-type'] == 'image/png') {
      bioPicsDir += '.png';
    } else {
      bioPicsDir += '.jpg';
    }

    
    fs.writeFile(bioPicsDir, file.data, function(err) {
        if (err)
        console.log("error is " + err);
      else {
        console.log("File written successfully\n");
      }
    })
    return;
    
  } catch (err) {
    // TODO(developer) - Handle error
    throw err;
  }



}

/**
 * Downloads a file
 * @param{string} realFileId file ID
 * @return{obj} file status
 * */
 async function downloadFile(realFileId) {
  // Get credentials and build service
  // TODO (developer) - Use appropriate auth mechanism for your app



  const auth = new GoogleAuth({scopes: 'https://www.googleapis.com/auth/drive'});
  const service = google.drive({version: 'v3', auth});

  const fileId = realFileId;
  try {
    const file = await service.files.get({
      fileId: fileId,
      alt: 'media',
    });
    console.log(file.status);
    return file.status;
  } catch (err) {
    // TODO(developer) - Handle error
    throw err;
  }
};

// downloadFile('1dNCsD2l0VUuFIQV82L9PNdh5WghB8ifL');

const getArtworks = async (photoUrl, preferredName, drive) => {
  if (!photoUrl) return

  console.log(`Getting artwork pics for ${preferredName}`)
  const artworkPicsDir = normalize(`${__dirname}/../static/img/artworks`)
  const artworkPicsArray = photoUrl.split(',')

  artworkPicsArray.forEach((piece, index) => {
    const artworkDriveId = piece
      .trim()
      .replace('https://drive.google.com/open?id=', '')

    const artworkPicName = "";
    const artworkPicDest = fs.createWriteStream(
      `${artworkPicsDir}/${artworkPicName}.jpg`
    )

    drive.files.get(
      {
        fileId: artworkDriveId,
        alt: 'media',
      },
      { responseType: 'stream' },
      function (err, res) {
        res.data
          .on('done', () => {
            console.log('done')
          })
          .on('error', (err) => {
            console.log('error', err)
          })
          .pipe(artworkPicDest)
      }
    )
  })
}

const getArtworkFormData = async (drive) => {
  const artworkDir = normalize(`${__dirname}/../src/utils/data`)

  

    getPortrait(portraitUrl, preferredName, drive)
    getArtworks(photoUrl, preferredName, drive)

    artworkSubmissionFormData += `${email},${legalName},${preferredName},"${bio.replace(
      /["']/g,
      `'`
    )}","${title.replace(/["']/g, `'`)}","${artwork.replace(
      /["']/g,
      `'`
    )}","${photoUrl}",${videoUrlOne},${videoUrlTwo},"${instructions}" \n`

}


const main = async () => {
  const auth = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/drive'],
    keyFile: `${__dirname}/../secrets/gold-comparts.json`,
  })

  const drive = google.drive({ version: 'v2', auth })

  getArtworkFormData(drive)
}

// main()