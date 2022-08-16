#!/usr/bin/env node -r esm
import fs from 'fs'
import { normalize } from 'path'
import { google } from 'googleapis'


//pull the data from csv/tsv

//loop through each artist to get url's

//use the url's to access the photos in drive

//save the photos to file in the repo, keeping track of who's they are



const getPortrait = async (portraitUrl, preferredName, drive) => {
  if (!portraitUrl) return

  console.log(`Getting portrait pic for ${preferredName}`)

  const bioPicsDir = normalize(`${__dirname}/../static/img/bios`)
  const fileId = portraitUrl.replace('https://drive.google.com/open?id=', '')

  const bioPicDest = fs.createWriteStream(`${bioPicsDir}/${picName}.jpg`)

  drive.files.get(
    {
      fileId,
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
        .pipe(bioPicDest)
    }
  )
}

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

main()