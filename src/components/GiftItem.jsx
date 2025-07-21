

export const GiftItem = ({ title, url, user }) => {
  const userName = user || 'Anonymous';

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={url}
          alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{userName}</div>
        </h2>
      </div>
    </div>
  )
}
