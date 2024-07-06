import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { ComicData } from '../types';

dayjs.extend(relativeTime);

const ComicPage: React.FC = () => {
    const [comic, setComic] = useState<ComicData | null>(null);
    const email = 's.lutfullin@innopolis.university';

    useEffect(() => {
        async function fetchComic() {
            try {
                const comicIdResponse = await fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`);
                if (!comicIdResponse.ok) throw new Error('Failed to fetch comic ID');
                const comicId = await comicIdResponse.text();

                const comicResponse = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
                if (!comicResponse.ok) throw new Error('Failed to fetch comic data');
                const comicData: ComicData = await comicResponse.json();

                setComic(comicData);
            } catch (error) {
                console.error('Error fetching comic:', error);
            }
        }

        fetchComic();
    }, [email]);

    if (!comic) return <p>Loading comic...</p>;

    const releaseDate = dayjs(new Date(Date.UTC(Number(comic.year), Number(comic.month) - 1, Number(comic.day))));

    return (
        <div className="comic-info" style={{ alignContent: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <h2>{comic.safe_title}</h2>
            <p>{releaseDate.fromNow()}</p>
            <img src={comic.img} alt={comic.alt} />
            <p>{comic.alt}</p>
        </div>
    );
};

export default ComicPage;
