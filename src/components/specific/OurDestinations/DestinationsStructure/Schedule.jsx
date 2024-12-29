import React, { useState, useEffect } from 'react';

const Schedule = () => {
    const [season1Data, setSeason1Data] = useState([]);
    const [season2Data, setSeason2Data] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeSeason, setActiveSeason] = useState('season-1');
    const [headers, setHeaders] = useState([]);

    useEffect(() => {
        const fetchSeasonData = async () => {
            try {
                const API_KEY = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY;
                const SHEET1_ID = import.meta.env.VITE_SCHEDULE_1_ID;
                const SHEET2_ID = import.meta.env.VITE_SCHEDULE_2_ID;
                const RANGE = 'A1:E35'; // Fetch up to row 35 for both sheets

                // Fetch Season 1 data
                const response1 = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET1_ID}/values/${RANGE}?key=${API_KEY}`
                );

                // Fetch Season 2 data
                const response2 = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET2_ID}/values/${RANGE}?key=${API_KEY}`
                );

                if (!response1.ok || !response2.ok) {
                    throw new Error('Failed to fetch schedule data');
                }

                const data1 = await response1.json();
                const data2 = await response2.json();

                if (data1.values && data2.values) {
                    // Store only the column headers (row 3)
                    setHeaders([data1.values[2]]);

                    // Store season data (rows 4-35)
                    setSeason1Data(data1.values.slice(3));
                    setSeason2Data(data2.values.slice(3));
                } else {
                    setError('No data found in the sheets');
                }
            } catch (err) {
                setError(err.message);
                console.error('Error fetching schedule:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchSeasonData();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center p-4">
                <div className="text-lg">Loading schedule...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-4 text-red-500">
                Error: {error}
            </div>
        );
    }

    // Filter out full slots
    const filterFullSlots = (data) => {
        return data.filter(row => {
            const lastColumn = row[row.length - 1];
            return !lastColumn?.toLowerCase().includes('full');
        });
    };

    const filteredSeason1 = filterFullSlots(season1Data);
    const filteredSeason2 = filterFullSlots(season2Data);

    const SeasonTable = ({ data }) => (
        <table className="min-w-full bg-white border border-gray-200">
            <tbody>
                {/* Headers Row (only row 3) */}
                <tr>
                    {headers[0]?.map((header, index) => (
                        <th
                            key={index}
                            className="px-4 py-2 border-b border-gray-200 bg-fifth text-secondary text-left text-sm font-semibold"
                        >
                            {header}
                        </th>
                    ))}
                </tr>

                {/* Data Rows */}
                {data.map((row, rowIndex) => (
                    <tr
                        key={rowIndex}
                        className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                    >
                        {row.map((cell, cellIndex) => (
                            <td
                                key={cellIndex}
                                className="px-4 py-2 border-b border-gray-200 text-sm"
                            >
                                {cell || ''}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );

    const toggleSeason = (season) => {
        setActiveSeason(activeSeason === season ? null : season);
    };

    return (
        <div className="p-4 font-dmsans">
            <div className="max-w-6xl mx-auto">
                {/* Removed title and subtitle section */}

                {/* Season 1 */}
                <div className="mb-4">
                    <button
                        onClick={() => toggleSeason('season-1')}
                        className="w-full bg-tertiary text-fourth px-4 py-2 text-left text-lg font-semibold flex justify-between items-center"
                    >
                        <span>Season 2025-2026</span>
                        <span className="transform transition-transform duration-200">
                            {activeSeason === 'season-1' ? '−' : '+'}
                        </span>
                    </button>
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeSeason === 'season-1' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                        <div className="overflow-x-auto pt-4">
                            <SeasonTable data={filteredSeason1} />
                        </div>
                    </div>
                </div>

                {/* Season 2 */}
                <div className="mb-4">
                    <button
                        onClick={() => toggleSeason('season-2')}
                        className="w-full bg-tertiary text-fourth px-4 py-2 text-left text-lg font-semibold flex justify-between items-center"
                    >
                        <span>Season 2026-2027</span>
                        <span className="transform transition-transform duration-200">
                            {activeSeason === 'season-2' ? '−' : '+'}
                        </span>
                    </button>
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeSeason === 'season-2' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                        <div className="overflow-x-auto pt-4">
                            <SeasonTable data={filteredSeason2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;