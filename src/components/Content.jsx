import Categories from "./Categories";
import Video from "./Video";

const Content = () => {

    const videos = [
        {
            image: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
            title: 'Rick Astley - Never Gonna Give You Up',
            chanel: 'RickAstleyVEVO'
        },
        {
            image: 'https://img.youtube.com/vi/3JZ_D3ELwOQ/0.jpg',
            title: 'JavaScript Tutorial for Beginners',
            chanel: 'Programming with Mosh'
        },
        {
            image: 'https://img.youtube.com/vi/9bZkp7q19f0/0.jpg',
            title: 'PSY - GANGNAM STYLE',
            chanel: 'officialpsy'
        },
        {
            image: 'https://img.youtube.com/vi/6Dh-RL__uN4/0.jpg',
            title: 'React JS Crash Course',
            chanel: 'Traversy Media'
        },
        {
            image: 'https://img.youtube.com/vi/UB1O30fR-EE/0.jpg',
            title: 'CSS Grid Layout Crash Course',
            chanel: 'Academind'
        }
    ];


    return (
        <section className="col-start-2 col-end-3 row-start-2 row-end-3">
            <Categories />
            <section className="grid grid-cols-4 gap-4 pt-4">
                {
                    videos.map((video) => (<>
                        <Video
                            key={`video-${video.title}`}
                            image={video.image}
                            chanel={video.chanel}
                        />
                    </>))
                }
            </section>
        </section>
    )
}

export default Content