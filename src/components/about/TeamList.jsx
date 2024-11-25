import { Link } from 'react-router-dom';
import team1 from '../../assets/about/team-anna.webp';
import team2 from '../../assets/about/team-carl.webp';
import team3 from '../../assets/about/team-elisabeth.webp';
import team4 from '../../assets/about/team-gustav.webp';
import team5 from '../../assets/about/team-hakan.webp';
import team6 from '../../assets/about/team-melanie.webp';

import '../../style/about/team-list/team-list.css';

const TeamList = () => {
  const teamMembers = [
    { name: "Anna", position: "CEO", image: team1 },
    { name: "Carl", position: "Operations Manager", image: team2 },
    { name: "Elisabeth", position: "Fleet Manager", image: team3 },
    { name: "Gustav", position: "Customer Service Lead", image: team4 },
    { name: "Hakan", position: "Marketing Director", image: team5 },
    { name: "Melanie", position: "Sales Manager", image: team6 }
  ];

  return (
    <div className="team-wrapper">
      <section className="team-container">
        {teamMembers.map((member, index) => (
          <section key={index} className="members">
            <Link to={`/team/${member.name.toLowerCase()}`}>
            <img
              src={member.image}
              alt={`${member.name}'s profile`}
              className="member-image"
            />
            </Link>
            <section className="team-member-container">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-position">{member.position}</p>
            </section>
          </section>
        ))}
      </section>
    </div>
  );
};

export default TeamList;
