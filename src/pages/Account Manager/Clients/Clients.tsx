import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSort,
  faChevronUp,
  faChevronDown,
  faUsers,
  faClock,
  faTag,
  faUser,
  faChartSimple,
  faEllipsisVertical,
  faEye,
  faPen,
  faTrash,
  faEarthAmericas,
  faListCheck,
  faBriefcase,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import "../../../Clients.css";
import { Link } from "react-router-dom";
import "../../../Cards.css";
import { faC } from "@fortawesome/free-solid-svg-icons/faC";

// Defining an interface for the checkbox states
interface CheckboxStates {
  division: boolean;
  highGrowth: boolean;
}

const Clients = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState<CheckboxStates>({
    division: false,
    highGrowth: false,
  });

  // Function to toggle the checkbox state
  const toggleCheckbox = (key: keyof CheckboxStates) => {
    setCheckboxStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleSettings = () => {
    setSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className="main-content">
      <div className="header-section">
        <h1 className="title-section">Clients</h1>
        <div className="right-section">
          <Link to="/accountManager/clients/new">
            <button className="create-button">Add Client</button>
          </Link>

          <div className="search-section">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              className="search-input"
              type="text"
              placeholder="Search for clients..."
            />
            <button className="sort-button">
              <FontAwesomeIcon icon={faSort} className="sort-icon" />
              <span>Sort</span>
              <div onClick={() => setDropdown((state) => !state)}>
                <FontAwesomeIcon
                  icon={dropdown ? faChevronUp : faChevronDown}
                  className="display-icon"
                />
              </div>
              {dropdown && (
                <div className="floating-dropdown4 show cursor-pointer">
                  <ul>
                    <li className="dropdown-item">
                      <label>
                        <input
                          type="checkbox"
                          checked={checkboxStates.division}
                          onChange={() => toggleCheckbox("division")}
                        />
                        <span className="sort-text">Division</span>
                      </label>
                    </li>
                    <li className="dropdown-item">
                      <label>
                        <input
                          type="checkbox"
                          checked={checkboxStates.highGrowth}
                          onChange={() => toggleCheckbox("highGrowth")}
                        />
                        <span className="sort-text">High-Growth</span>
                      </label>
                    </li>
                  </ul>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
      <hr className="custom-hr" />
      <div className="job-card">
        <div className="card-top">
          <img
            src="https://api-prod-minimal-v510.vercel.app/assets/images/company/company_4.png"
            alt="Company Logo"
            className="company-logo"
          />
          <div className="settings" onClick={toggleSettings}>
            <FontAwesomeIcon icon={faEllipsisVertical} />
            {isSettingsOpen && (
              <div className="floating-dropdown show cursor-pointer">
                <ul>
                  <li className="drop-down-text">
                    <Link to="">
                      <FontAwesomeIcon
                        icon={faEye}
                        className="drop-down-icon"
                      />
                      View
                    </Link>
                  </li>
                  <li className="drop-down-text ">
                    <Link to="">
                      <FontAwesomeIcon
                        icon={faPen}
                        className="drop-down-icon"
                      />
                      Edit
                    </Link>
                  </li>
                  <li className="drop-down-text red">
                    <Link to="">
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="drop-down-icon"
                      />
                      Delete
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="top-card-section">
          <h4 className="title-card">Coca Cola</h4>
          <p className="subtitle-card">Joining date: 16 Apr 2024</p>
          <p className="subtitle-card blue spacing-bottom">
            <FontAwesomeIcon icon={faBriefcase} className="job-icons blue" />
            12 Projects
          </p>
        </div>

        <hr className="custom-hr-card" />
        <div className="detail-section">
          <div className="detail-row">
            <p className="subtitle-card">
              <FontAwesomeIcon icon={faChartSimple} className="job-icons" />
              &gt; 3 year exp
            </p>
            <p className="subtitle-card">
              <FontAwesomeIcon icon={faEarthAmericas} className="job-icons" />
              Brazil
            </p>
          </div>
          <div className="detail-row">
            <p className="subtitle-card">
              <FontAwesomeIcon icon={faMoneyBill} className="job-icons" />
              Negotiable
            </p>
            <p className="subtitle-card">
              <FontAwesomeIcon icon={faUser} className="job-icons" />
              High-Growth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
