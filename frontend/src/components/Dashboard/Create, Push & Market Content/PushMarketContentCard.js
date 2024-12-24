"use client";

import React from 'react';
import DashboardCard from '../../DashboardCard';
import styles from './PushMarketContentCard.module.css';

const PushMarketContentCard = () => {
    const totalValue = 1000;
    const currentValue = 652;
    const percentage = (currentValue / totalValue) * 100;

    const getSegments = (percentage) => {
        const segments = [];
        const segmentPercentages = [
            { limit: 25, color: '#FF6666' },   // Red
            { limit: 50, color: '#FFCC66' },   // Yellow
            { limit: 75, color: '#FF9933' },   // Orange
            { limit: 100, color: '#66CC66' },  // Green
        ];

        let progress = 0;
        for (const segment of segmentPercentages) {
            if (percentage > progress) {
                const segmentEnd = Math.min(percentage, segment.limit);
                segments.push({
                    start: progress,
                    end: segmentEnd,
                    color: segment.color,
                });
                progress = segment.limit;
            } else {
                break;
            }
        }
        return segments;
    };

    const segments = getSegments(percentage);
    const centerX = 160;
    const centerY = 160;
    const radius = 160;

    const polarToCartesian = (angleInDegrees) => {
        const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians)),
        };
    };

    const getArcPath = (startAngle, endAngle) => {
        const start = polarToCartesian(endAngle);
        const end = polarToCartesian(startAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
        return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
    };

    return (
        <DashboardCard className={styles['push-market-content-card']}>
            <div className={styles['card-header']}>
                <span>Create, Push & Market Content</span>
                <a href="/another-page" className={styles['expend-button']}>
                    <button>↗</button>
                </a>
            </div>
            <div className={styles['card-body']}>
                <div className={styles['radial-progress']}>
                    <svg width="320" height="200" viewBox="0 0 320 200">
                        <g transform="translate(0,0)">
                            <circle
                                r="160"
                                fill="none"
                                stroke="#d3d3d3"
                                strokeWidth="1"
                                strokeDasharray="4 6"
                                transform="translate(160,160) rotate(-90)"
                            />
                            {segments.map((segment, index) => (
                                <path
                                    key={index}
                                    d={getArcPath(segment.start * 1.8, segment.end * 1.8)}
                                    stroke={segment.color}
                                    strokeWidth="3"
                                    fill="none"
                                />
                            ))}
                        </g>
                        <text x="50%" y="50%" textAnchor="middle" dy="10" className={styles['radial-value']}>
                            {currentValue}
                        </text>
                        <text x="50%" y="65%" textAnchor="middle" dy="10" className={styles['radial-label']}>
                            Content Push Marketing
                        </text>
                        <text x="50%" y="80%" textAnchor="middle" dy="10" className={styles['last-check']}>
                            Last Check on 24 Apr
                        </text>
                    </svg>
                </div>
            </div>
        </DashboardCard>
    );
};

export default PushMarketContentCard;
