import styled from "styled-components";
import Data from "../../data/data"
import { Link } from "react-router-dom";
import Title from "./Title";

const AllStore = () => {
  return (
    <>
    {
      Data.map((area) => {
        return (
          <>
          <Title titleID={area.id} titleName={area.area} />
          <StyledStoreList>
            <ul>
              {
                area.children.map((store) => {
                  return (
                    <li>
                      <p>
                        <Link to={`/uniqlo-store-map/${store.id}`} >
                          {store.storeName}
                        </Link>
                        <StyledSpan isTagged={store.tag === "" ? false : true} >
                          {store.tag}
                        </StyledSpan>
                      </p>
                      <p>電話: {store.tel}</p>
                      <p>地址: {store.address}</p>
                      <p>販售系列: {store.series}</p>
                    </li>
                  );
                })
              }
            </ul>
          </StyledStoreList>
          </>
        );
      })
    }
    </>
  );
};

export default AllStore;

const StyledStoreList = styled.div`
  padding: 30px 20px 0px 20px;
  margin-bottom: 20px;
  background-color: #fff;
  & > ul {
    display: flex;
    flex-wrap: wrap;
  }
  & > ul > li{
    width: 50%;
    margin-bottom: 30px;
  }
  & > ul > li > p{
    font-size: 13px;
    line-height: 2;
    padding: 0;
    margin: 0;
  }
`;

// 如果這間店有tag，就加上雙括號
const StyledSpan = styled.span`
  color: #28aea3;
  ${(props) => {
    if (props.isTagged) {
      return `
        ::before {
          content: "《";
        }
        ::after {
          content: "》";
        }
      `;
    }
  }}
`;


