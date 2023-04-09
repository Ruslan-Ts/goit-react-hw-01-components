import {StatContainer, StatTitle, StatList, StatItem, StatLabel, StatPercentage} from './Statistics.styled'
import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function Statistics({title, stats}) {
    return <StatContainer>
        {title && <StatTitle>{title}</StatTitle>}
        <StatList>          
            {stats.map(data => (
              <StatItem style={
                  {backgroundColor: getRandomHexColor()}
                } key={data.id}>
                <StatLabel>{data.label}</StatLabel>
                <StatPercentage>{data.percentage}</StatPercentage>
                </StatItem>))}
    
  </StatList>
</StatContainer>
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};