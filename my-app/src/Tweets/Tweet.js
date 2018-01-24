import React, {Component} from "react";
import "./Tweet.css";
import { Timeline, Follow } from 'react-twitter-widgets';

class Tweet extends Component {

    render() {
        return (
            <div className="tweet">
                <Timeline
                    dataSource={{
                        sourceType: 'likes',
                        screenName: '13urstSkill'
                    }}
                    options={{
                        username: '13urstSkill'
                    }}
                    onLoad={() => console.log('Timeline is loaded!')}
                />
                <Follow username="13urstSkill" options={{count: "none"}}/>
            </div>
        );
    }
}

export default Tweet;