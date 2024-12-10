import fs from 'fs';
import path from 'path';
import Link from 'next/link';

function listFilesInDirectory(directoryPath) {
    try {
        const filenames = fs.readdirSync(directoryPath);
        return filenames;
    } catch (error) {
        console.error('Error reading directory:', error);
        return [];
    }
}

export default async function MealsPage() {
    const imagesDirectory = path.join(process.cwd(), 'public', 'images');
    const imageList = listFilesInDirectory(imagesDirectory);

    const groupedImages = [];
    for (let i = 0; i < imageList.length; i += 3) {
        groupedImages.push(imageList.slice(i, i + 3));
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Meals Page</h1>
            {groupedImages.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    {row.map((image, imageIndex) => (
                        <div key={imageIndex} style={{ flex: '1', margin: '0 10px', textAlign: 'center' }}>
                            <Link href={`/meals/${image.substring(0,image.length-4)}`} style={{ textDecoration: 'none' }}>
                                <img 
                                    src={`/images/${image}`} 
                                    alt={image} 
                                    style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '8px', cursor: 'pointer', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }} 
                                />
                                <h2 style={{ marginTop: '10px', fontSize: '1.2rem', color: '#333' }}>
                                    {image.substring(0,image.length-4).toUpperCase()}
                                </h2>
                            </Link>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
