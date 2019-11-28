import React from 'react';
import Admin from "../../Shared/Admin";
import InfoBoxes from "../../components/Admin/InfoBoxes";

function Dashboard(props) {
    const { products, success_message, category = null } = props;
    console.log('succes_message =>', success_message);
    return (
        <Admin title="Panel">
            <InfoBoxes />
            {/*Graph Content */}
            <div id="main-content" className="w-full flex-1">

                <div className="flex flex-1 flex-wrap">

                    <div className="w-full xl:w-2/3 p-6 xl:max-w-6xl">

                        {/*"Container" for the graphs"*/}
                        <div className="max-w-full lg:max-w-3xl xl:max-w-5xl">

                            {/*Graph Card*/}
                            <div className="border-b p-3">
                                <h5 className="font-bold text-black">Graph</h5>
                            </div>
                            <div className="p-5">
                                <div className="ct-chart ct-golden-section" id="chart1"/>
                            </div>
                            {/*/Graph Card*/}

                            {/*Table Card*/}
                            <div className="p-3">
                                <div className="border-b p-3">
                                    <h5 className="font-bold text-black">Table</h5>
                                </div>
                                <div className="p-5">
                                    <table className="w-full p-5 text-gray-700">
                                        <thead>
                                        <tr>
                                            <th className="text-left text-blue-900">Name</th>
                                            <th className="text-left text-blue-900">Side</th>
                                            <th className="text-left text-blue-900">Role</th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        <tr>
                                            <td>Obi Wan Kenobi</td>
                                            <td>Light</td>
                                            <td>Jedi</td>
                                        </tr>
                                        <tr>
                                            <td>Greedo</td>
                                            <td>South</td>
                                            <td>Scumbag</td>
                                        </tr>
                                        <tr>
                                            <td>Darth Vader</td>
                                            <td>Dark</td>
                                            <td>Sith</td>
                                        </tr>
                                        </tbody>
                                    </table>

                                    <p className="py-2"><a href="#">See More issues...</a></p>

                                </div>
                            </div>
                            {/*/table Card*/}

                        </div>

                    </div>

                    <div className="w-full xl:w-1/3 p-6 xl:max-w-4xl border-l-1 border-gray-300">

                        {/*"Container" for the graphs"*/}
                        <div className="max-w-sm lg:max-w-3xl xl:max-w-5xl">

                            {/*Graph Card*/}

                            <div className="border-b p-3">
                                <h5 className="font-bold text-black">Graph</h5>
                            </div>
                            <div className="p-5">
                                <div className="ct-chart ct-golden-section" id="chart2"/>
                            </div>

                            {/*/Graph Card*/}

                            {/*Graph Card*/}
                            <div className="border-b p-3">
                                <h5 className="font-bold text-black">Graph</h5>
                            </div>
                            <div className="p-5">
                                <div className="ct-chart ct-golden-section" id="chart3"/>
                            </div>

                            {/*/Graph Card*/}

                            {/*Graph Card*/}

                            <div className="border-b p-3">
                                <h5 className="font-bold text-black">Graph</h5>
                            </div>
                            <div className="p-5">
                                <div className="ct-chart ct-golden-section" id="chart4"/>
                            </div>

                            {/*/Graph Card*/}

                            {/*Template Card*/}
                            <div className="p-3">
                                <div className="border-b p-3">
                                    <h5 className="font-bold text-black">Template</h5>
                                </div>
                                <div className="p-5">

                                </div>
                            </div>
                            {/*/Template Card*/}

                        </div>

                    </div>

                </div>

            </div>
        </Admin>
    );
}

export default Dashboard;
