import Link from 'next/link';
import client from '../contentfulClient';
import Adcomponent1 from '../components/Adcomponent1';
import Adcomponent2 from '../components/Adcomponent2';
import Adcomponent3 from '../components/Adcomponent3';
import Adcomponent4 from '../components/Adcomponent4';
import NotFound from '../components/not-found';
import AdNative from '../components/AdNative';
import Adcash1 from '../components/Adcash1';
import NativeAd from '../components/NativeAd';
import '../css/Video.css';

// Dynamically generate metadata based on the slug
export async function generateMetadata({ params }) {
  const resolvedParams = await params; 
  const { slug } = resolvedParams;


  // Fetch the video entry by slug
  const singleVideo = await client.getEntries({
    content_type: 'exclusivefab',
    'fields.slug': slug,
    limit: 1,
  });

  const videoData = singleVideo.items.length > 0 ? singleVideo.items[0].fields : null;

  const videoTitle = videoData?.title || 'Default Title';

  return {
    title: videoTitle,
    description: videoTitle,
    keywords: videoTitle,
  };
}

export default async function Video({ params }) {
  const resolvedParams = await params; 
  const { slug } = resolvedParams;


  // Fetch the video entry by slug
  const singleVideo = await client.getEntries({
    content_type: 'exclusivefab',
    'fields.slug': slug,
    limit: 1,
  });

  const videoData = singleVideo.items.length > 0 ? singleVideo.items[0].fields : null;

  if (!videoData) {
    return <NotFound />;
  }

  // Fetch related posts with the same tag
  const Related = await client.getEntries({
    content_type: 'exclusivefab',
    'fields.tag': videoData.tag || '',
    limit: 6,
  });
  const relatedData = Related.items;

  return (
    <>
      <div className="ad1">
        <Adcomponent1 />
      </div>
      <div className="ad2">
        <Adcomponent2 />
      </div>
      <div className="video-container">
        <div className="secton-1">
          <h1 className="video-title">{videoData?.title || 'No title available'}</h1>
          {videoData?.video?.fields?.file?.url ? (
            <video className="video" controls src={`https:${videoData.video.fields.file.url}`} />
          ) : (
            <p>Video not available</p>
          )}

          <div className="ad3">
            <Adcomponent3 />
          </div>
          
          <Adcash1 />

          <h2 className="related-h2">Related Posts</h2>
          <div className="related-container">
            {relatedData.map((item) => (
              <Link href={`/${item.fields.slug}`} key={item.sys.id} className="related-item">
                <img 
                  src={`https:${item.fields.image?.fields?.file?.url || ''}`}
                  alt={item.fields.title}
                  className="related-thumbnail"
                />
                <h3 className="related-title">{item.fields.title}</h3>
              </Link>
            ))}
          </div>
          <div className="ad4">
            <Adcomponent4 />
          </div>
        </div>
        <div className="secton-2">
          <div className="AdNative">
            <AdNative />
          </div>
        </div>
      </div>
    </>
  );
}
