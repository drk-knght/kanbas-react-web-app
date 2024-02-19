import { Link, useParams } from 'react-router-dom';

import {
  FaBook,
  FaBullhorn,
  FaCalendar,
  FaChevronDown,
  FaCircle,
  FaClipboard,
  FaCog,
  FaComments,
  FaCrosshairs,
  FaEyeSlash,
  FaFile,
  FaHistory,
  FaHome,
  FaInbox,
  FaObjectGroup,
  FaPlug,
  FaQuestionCircle,
  FaRocket,
  FaSignOutAlt,
  FaTachometerAlt,
  FaTimes,
  FaUserCircle,
  FaUsers,
  FaYoutube
} from 'react-icons/fa';
import { PiNotePencil } from 'react-icons/pi';
import { HiMiniBars3 } from 'react-icons/hi2';
import './index.css';
import { PiEyeglasses } from 'react-icons/pi';
import { courses } from '../../Database';
import { useState } from 'react';

function SmallNav() {
  const { courseId } = useParams();
  const course = courses.find(course => course._id === courseId);

  const href = window.location.href;
  const splitHref = href.split('/');

  const navText = splitHref.at(-1) === 'Home' ? 'Modules' : splitHref.at(-1);
  const [canvasNavExpanded, setCanvasNavExpanded] = useState(false);

  return (
    <div className="d-block d-sm-block d-md-none">
      <nav className="navbar navbar-expand-lg p-0">
        <div className="container-fluid p-0">
          <div
            className="d-flex justify-content-between align-items-center w-100 bg-dark"
            style={{ height: 75 }}
          >
            <button
              className="navbar-toggler focus-ring focus-ring-dark"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              style={{ border: 'none' }}
            >
              <HiMiniBars3
                color="white"
                cursor="pointer"
                fontSize="1.7em"
                className="me-3"
              />
            </button>
            <div style={{ textAlign: 'center', color: 'white' }}>
              <Link
                to="#"
                className="link-light link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
              >
                {course?.description}
                <br />
                {navText}
              </Link>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <PiEyeglasses
                fontSize="1.2em"
                className="me-1 cursor-pointer"
                color="white"
              />
              <button
                className="navbar-toggler focus-ring focus-ring-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                style={{ border: 'none' }}
                onClick={() => setCanvasNavExpanded(!canvasNavExpanded)}
              >
                {canvasNavExpanded ? (
                  <FaTimes className="mr-20" color="white" />
                ) : (
                  <FaChevronDown className="mr-20" color="white" />
                )}
              </button>
            </div>
          </div>
          <div
            className="offcanvas offcanvas-start w-100"
            tabIndex={-1}
            id="offcanvasNavbar"
          >
            <div className="offcanvas-header">
              <div>&nbsp;</div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
              />
            </div>
            <div className="offcanvas-body">
              <ul style={{ listStyle: 'none' }}>
                <li className="my-2">
                  <Link
                    to="/Kanbas/Dashboard"
                    className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover d-flex justify-content-start align-items-center"
                  >
                    <FaTachometerAlt className="me-2 fs-24" />
                    Dashboard
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="#"
                    className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover d-flex justify-content-start align-items-center"
                  >
                    <FaUserCircle className="me-2 fs-24" />
                    Account
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="/Kanbas/Courses"
                    className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover d-flex justify-content-start align-items-center"
                  >
                    <FaBook className="me-2 fs-24" />
                    Courses
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="#"
                    className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover d-flex justify-content-start align-items-center"
                  >
                    <FaCalendar className="me-2 fs-24" />
                    Calendar
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="#"
                    className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover d-flex justify-content-start align-items-center"
                  >
                    <FaInbox className="me-2 fs-24" />
                    Inbox
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="#"
                    className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover d-flex justify-content-start align-items-center"
                  >
                    <FaHistory className="me-2 fs-24" />
                    History
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="#"
                    className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover d-flex justify-content-start align-items-center"
                  >
                    <FaYoutube className="me-2 fs-24" />
                    Studio
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="#"
                    className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover d-flex justify-content-start align-items-center"
                  >
                    <FaSignOutAlt className="me-2 fs-24" />
                    Commons
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="#"
                    className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover d-flex justify-content-start align-items-center"
                  >
                    <FaQuestionCircle className="me-2 fs-24" />
                    Help
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="collapse navbar-collapse p-0 m-0 z-1"
            id="navbarTogglerDemo02"
            style={{ backgroundColor: 'white' }}
          >
            <ul
              style={{ listStyle: 'none', padding: 0 }}
              className="text-danger px-1"
            >
              <li className="d-flex justify-content-start align-items-center">
                <FaHome className="me-2" />
                <Link
                  to={`/Kanbas/Courses/${course?._id}/Home`}
                  className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                >
                  Home
                </Link>
              </li>
              <li className="d-flex justify-content-start align-items-center">
                <FaObjectGroup className="me-2" />
                <Link
                  className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  to={`/Kanbas/Courses/${course?._id}/Home`}
                >
                  Modules
                </Link>
              </li>
              <li className="d-flex justify-content-start align-items-center">
                <FaPlug className="me-2" />
                <Link
                  className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  to={`/Kanbas/Courses/${course?._id}/Piazza`}
                >
                  Piazza
                </Link>
              </li>
              <li className="d-flex justify-content-start align-items-center">
                <FaPlug className="me-2" />
                <Link
                  className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  to="#"
                >
                  Zoom
                </Link>
              </li>
              <li className="d-flex justify-content-start align-items-center">
                <PiNotePencil className="me-2" />
                <Link
                  className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  to={`/Kanbas/Courses/${course?._id}/Assignments`}
                >
                  Assignments
                </Link>
              </li>
              <li className="d-flex justify-content-start align-items-center">
                <FaRocket className="me-2" />
                <Link
                  className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  to="#"
                >
                  Quizzes
                </Link>
              </li>
              <li className="d-flex justify-content-start align-items-center">
                <PiNotePencil className="me-2" />
                <Link
                  className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  to={`/Kanbas/Courses/${course?._id}/Grades`}
                >
                  Grades
                </Link>
              </li>
              <li className="d-flex justify-content-start align-items-center">
                <FaUsers className="me-2" />
                <Link
                  className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  to="#"
                >
                  People
                </Link>
              </li>
              <li className="d-flex justify-content-start align-items-center">
                <FaPlug className="me-2" />
                <Link
                  className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  to="#"
                >
                  Panopto Video
                </Link>
              </li>
              <li className="d-flex justify-content-start align-items-center">
                <FaComments className="me-2" />
                <Link
                  className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  to="#"
                >
                  Discussions
                </Link>
                <FaEyeSlash className="text-dark ms-2" />
              </li>
              <li className="d-flex justify-content-start align-items-center">
                <FaBullhorn className="me-2" />
                <Link
                  className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  to="#"
                >
                  Announcements
                </Link>
                <FaEyeSlash className="text-dark ms-2" />
              </li>
              <li className="d-flex justify-content-start align-items-center">
                <FaFile className="me-2" />
                <Link
                  className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  to="#"
                >
                  Pages
                </Link>
                <FaEyeSlash className="text-dark ms-2" />
              </li>
              <li className="d-flex justify-content-start align-items-center">
                <FaFile className="me-2" />
                <Link
                  className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  to="#"
                >
                  Files
                </Link>
                <FaEyeSlash className="text-dark ms-2" />
              </li>
              <li className="d-flex justify-content-start align-items-center">
                <FaClipboard className="me-2" />
                <Link
                  className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  to="#"
                >
                  Rubrics
                </Link>
                <FaEyeSlash className="text-dark ms-2" />
              </li>
              <li className="d-flex justify-content-start align-items-center">
                <FaCrosshairs className="me-2" />
                <Link
                  className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  to="#"
                >
                  Outcomes
                </Link>
                <FaEyeSlash className="text-dark ms-2" />
              </li>
              <li className="d-flex justify-content-start align-items-center">
                <FaCircle className="me-2" />
                <Link
                  className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  to="#"
                >
                  Collaborations
                </Link>
                <FaEyeSlash className="text-dark ms-2" />
              </li>
              <li className="d-flex justify-content-start align-items-center">
                <FaBook className="me-2" />
                <Link
                  className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  to="#"
                >
                  Syllabus
                </Link>
                <FaEyeSlash className="text-dark ms-2" />
              </li>
              <li className="d-flex justify-content-start align-items-center">
                <FaCog className="me-2" />
                <Link
                  className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                  to="#"
                >
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SmallNav;