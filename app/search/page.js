import Link from 'next/link';
import '../css/category.css';
import client from '../contentfulClient';

export default async function SearchResults({ searchParams }) {
  // Await searchParams
  const params = await searchParams;
  const currentPage = parseInt(params.page || '1', 10);
  const { query } = params;

  const itemsPerPage = 30;
  const skip = (currentPage - 1) * itemsPerPage;

  const res = await client.getEntries({
    content_type: 'exclusivefab',
    'fields.title[match]': query,
    limit: itemsPerPage,
    skip,
  });

  const data = res.items;
  const totalItems = res.total;

  // Calculate the total number of pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="container">
      {/* Render paginated items */}
      {data.map((item) => (
        <Link href={`/${item.fields.slug}`} key={item.sys.id} className="link">
          <img
            src={`https:${item.fields.image?.fields?.file?.url || null}`}
            alt={item.fields.title}
            className="thumbnail"
          />
          <h2 className="title">{item.fields.title}</h2>
          <h6 className="tag">{item.fields.tag}</h6>
        </Link>
      ))}

      {/* Pagination Controls */}
      <div className="pagination">
        {/* Previous Button */}
        {currentPage > 1 && (
          <Link href={`/?page=${currentPage - 1}`} className="pagination-link">
            Previous
          </Link>
        )}

        {/* Current Page */}
        <span className="current-page">Page {currentPage}</span>

        {/* Next Button */}
        {currentPage < totalPages && (
          <Link href={`/?page=${currentPage + 1}`} className="pagination-link">
            Next
          </Link>
        )}
      </div>
    </div>
  );
}
