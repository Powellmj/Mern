import React from 'react';
import { Link } from 'react-router-dom';
import EventPageIndexItem from './event_page_index_item'
import './event_page_index.css'
import Moment from 'react-moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class EventPageIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dates: {},
      date: new Date(),
      searchTerm: this.props.location.state ? this.props.location.state.search : '',
    }

    this.splitDates = this.splitDates.bind(this)
    this.setDate = this.setDate.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  componentDidMount() {
    this.props.fetchAllEvents()
  }

  splitDates() {
    let mappableDates = {}

    let filteredDates = this.props.events.filter(event => {
      if (event.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
        return event
      }
    })

    let sortedDates = filteredDates.sort((event1, event2) => {
      return new Date(event1.event_start) - new Date(event2.event_start);
    });

    sortedDates.forEach(event => {
      if (Date.parse(event.event_start) >= this.state.date ) {
        mappableDates[event.event_start.slice(0, 10)] = mappableDates[event.event_start.slice(0, 10)] || 
        [{ headerDate: event.event_start.slice(0, 10) }]
        mappableDates[event.event_start.slice(0, 10)].push(event)
      }
    });
    this.state.dates = mappableDates;
  }

  handleUpdate() {
    return e => this.setState({
      searchTerm: e.currentTarget.value
    });
  }

  handleClick = () => {
    this.props.history.push({ 
      pathname: `/groups/`,
      state: { search: this.state.searchTerm }  });
  }

  setDate(date) {
    this.setState({ date: date })
  }

  render() {
    this.splitDates()
    return (
      <div className="event-page-index-container">
        <div className="index-banner">
          <div className="index-banner-header" >Find your next simulation</div>
          <div className="index-banner-text">{`${this.props.events.length}`} groups near you</div>
        </div>
        <div className="index-search-pos">
          <div className="index-search">
            <input 
            value={this.state.searchTerm}
            onChange={this.handleUpdate()}
            className="index-search-input" 
            placeholder="Search"
            />
            <i className="fas fa-search"></i>
          <div className="banner-buttons">
            <div onClick={this.handleClick} className="banner-button">Groups</div>
            <div className="banner-button active-banner-button">Calendar</div>
          </div>
          </div>
        </div>
        <div className="event-page-index-calendar">
          <div className="calendar">
          <DatePicker
            selected={this.state.date}
            onChange={date => this.setDate(date)}
            minDate={new Date()}
            inline
          />
          </div>
          <div className="event-page-index-window">
        <div>
          <ul className="event-page-index">
            {
              Object.values(this.state.dates).map((date, i) => {
                if (i < 2) {
                  return (
                    date.map(event => {
                      if (event.headerDate) {
                        return (
                          <div className="date-header">
                            <Moment format="dddd, MMMM D">{event.headerDate}</Moment>
                          </div>
                        )
                      } else {
                      return (
                      <li key={event._id}>
                        <EventPageIndexItem event={event} />
                      </li>
                      )
                      }
                    })
                  )
                }
              })
            }
          </ul>
        </div>
        <div className="event-page-link-container">
          <div className="event-post-index-links">
            <div className="index-links-header">Take your next step with Meetin</div>
            <div className="index-links-text">Start a group to find the people you’re looking for.</div>
            <ul className="event-page-index-link-list">
              {
                this.props.linkTitles.map((title, i) => (
                  <li key={i} className={`event-page-index-link index-link-${i}`}>
                    <Link to={`/groups/create`}>
                      <div className="index-link-title">{title}</div>
                      <div className="index-link-learn">Learn how</div>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <div>
          <ul className="event-page-index">
                {
                  Object.values(this.state.dates).map((date, i) => {
                    if (i > 2) {
                      return (
                        date.map(event => {
                          if (event.headerDate) {
                            return (
                              <div className="date-header">
                                <Moment format="dddd, MMMM D">{event.headerDate}</Moment>
                              </div>
                            )
                          } else {
                            return (
                              <li key={event._id}>
                                <EventPageIndexItem event={event} />
                              </li>
                            )
                          }
                        })
                      )
                    }
                  })
                }
          </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default EventPageIndex;