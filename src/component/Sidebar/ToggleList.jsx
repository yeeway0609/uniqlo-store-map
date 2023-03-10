import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

// When isOpen is true, render all store in that area in the toggle list
const ToggleList = ({ area }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledToggleList>
      <div onClick={() => setIsOpen(!isOpen)}>
        <p>{area.area}</p>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </div>
      <StyledUl isOpen={isOpen}>
        {area.children.map((store) => {
          return (
            <li>
              <Link to={`/${store.id}`}>{store.storeName}</Link>
            </li>
          );
        })}
      </StyledUl>
    </StyledToggleList>
  );
};

export default ToggleList;

const StyledToggleList = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & > div:hover {
    cursor: pointer;
  }
  & > div > p {
    margin: 0;
    color: #ff0000;
  }
  & > div > svg {
    color: #ff0000;
  }
`;

const StyledUl = styled.ul`
  max-height: 0; /* 預設隱藏 */
  overflow-y: scroll; /* 滾動效果 */
  transition: max-height 0.5s ease-out;

  ${(props) => props.isOpen && `max-height: 1000px;`}
`;
