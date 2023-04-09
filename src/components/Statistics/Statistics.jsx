import PropTypes from 'prop-types';

function Statistics({title, stats}) {
    return <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
            
            {stats.map(data => (
                <li key={data.id} className="item">
                <span className="label">{data.label}</span>
                <span className="percentage">{data.percentage}</span>
    </li>))}
    
  </ul>
</section>
};

export default Statistics;

Statistics.propTypes = {
title: PropTypes.string,
stats: PropTypes.string,
}