const AllProject = () => {
    return (
        <div className="p-2">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            <div>
                <table className="min-w-full bg-[#0D0F10] rounded-lg">
                    <thead>
                        <tr className="bg-[#0D0F10]">
                            <th className="py-3 px-4 text-left">Project</th>
                            <th className="py-3 px-4 text-left">Last assessed</th>
                            <th className="py-3 px-4 text-left">License use</th>
                            <th className="py-3 px-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-gray-800 border-b border-gray-700">
                            <td className="py-3 px-4 flex items-center">
                                <input type="checkbox" className="mr-3" />
                                <img src="/icon.png" alt="Project Icon" className="w-6 h-6 mr-3" />
                                <div>
                                    <div>Sisyphus</div>
                                    <div className="text-sm text-gray-400">sisyphus.com</div>
                                </div>
                            </td>
                            <td className="py-3 px-4">22 Jan 2022</td>
                            <td className="py-3 px-4">
                                <span className="text-green-500 bg-green-100 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Active</span>
                                <span className="text-yellow-500 bg-yellow-100 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Customer data</span>
                                <span className="text-red-500 bg-red-100 text-xs font-semibold px-2.5 py-0.5 rounded">Admin</span>
                            </td>
                            <td className="py-3 px-4 flex justify-end">
                                <button className="text-gray-400 hover:text-gray-200 mr-3">🗑️</button>
                                <button className="text-gray-400 hover:text-gray-200">✏️</button>
                            </td>
                        </tr>
                        {/* Các dòng khác tương tự */}
                    </tbody>
                </table>
                <table className="min-w-full bg-[#0D0F10] rounded-lg">
                    <thead>
                        <tr className="bg-gray-700">
                            <th className="py-3 px-4 text-left">Project</th>
                            <th className="py-3 px-4 text-left">Last assessed</th>
                            <th className="py-3 px-4 text-left">License use</th>
                            <th className="py-3 px-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-gray-800 border-b border-gray-700">
                            <td className="py-3 px-4 flex items-center">
                                <input type="checkbox" className="mr-3" />
                                <img src="/icon.png" alt="Project Icon" className="w-6 h-6 mr-3" />
                                <div>
                                    <div>Sisyphus</div>
                                    <div className="text-sm text-gray-400">sisyphus.com</div>
                                </div>
                            </td>
                            <td className="py-3 px-4">22 Jan 2022</td>
                            <td className="py-3 px-4">
                                <span className="text-green-500 bg-green-100 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Active</span>
                                <span className="text-yellow-500 bg-yellow-100 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Customer data</span>
                                <span className="text-red-500 bg-red-100 text-xs font-semibold px-2.5 py-0.5 rounded">Admin</span>
                            </td>
                            <td className="py-3 px-4 flex justify-end">
                                <button className="text-gray-400 hover:text-gray-200 mr-3">🗑️</button>
                                <button className="text-gray-400 hover:text-gray-200">✏️</button>
                            </td>
                        </tr>
                        {/* Các dòng khác tương tự */}
                    </tbody>
                </table>
                <table className="min-w-full bg-[#0D0F10] rounded-lg">
                    <thead>
                        <tr className="bg-gray-700">
                            <th className="py-3 px-4 text-left">Project</th>
                            <th className="py-3 px-4 text-left">Last assessed</th>
                            <th className="py-3 px-4 text-left">License use</th>
                            <th className="py-3 px-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-gray-800 border-b border-gray-700">
                            <td className="py-3 px-4 flex items-center">
                                <input type="checkbox" className="mr-3" />
                                <img src="/icon.png" alt="Project Icon" className="w-6 h-6 mr-3" />
                                <div>
                                    <div>Sisyphus</div>
                                    <div className="text-sm text-gray-400">sisyphus.com</div>
                                </div>
                            </td>
                            <td className="py-3 px-4">22 Jan 2022</td>
                            <td className="py-3 px-4">
                                <span className="text-green-500 bg-green-100 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Active</span>
                                <span className="text-yellow-500 bg-yellow-100 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Customer data</span>
                                <span className="text-red-500 bg-red-100 text-xs font-semibold px-2.5 py-0.5 rounded">Admin</span>
                            </td>
                            <td className="py-3 px-4 flex justify-end">
                                <button className="text-gray-400 hover:text-gray-200 mr-3">🗑️</button>
                                <button className="text-gray-400 hover:text-gray-200">✏️</button>
                            </td>
                        </tr>
                        {/* Các dòng khác tương tự */}
                    </tbody>
                </table>
                <table className="min-w-full bg-[#0D0F10]rounded-lg">
                    <thead>
                        <tr className="bg-gray-700">
                            <th className="py-3 px-4 text-left">Project</th>
                            <th className="py-3 px-4 text-left">Last assessed</th>
                            <th className="py-3 px-4 text-left">License use</th>
                            <th className="py-3 px-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-gray-800 border-b border-gray-700">
                            <td className="py-3 px-4 flex items-center">
                                <input type="checkbox" className="mr-3" />
                                <img src="/icon.png" alt="Project Icon" className="w-6 h-6 mr-3" />
                                <div>
                                    <div>Sisyphus</div>
                                    <div className="text-sm text-gray-400">sisyphus.com</div>
                                </div>
                            </td>
                            <td className="py-3 px-4">22 Jan 2022</td>
                            <td className="py-3 px-4">
                                <span className="text-green-500 bg-green-100 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Active</span>
                                <span className="text-yellow-500 bg-yellow-100 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Customer data</span>
                                <span className="text-red-500 bg-red-100 text-xs font-semibold px-2.5 py-0.5 rounded">Admin</span>
                            </td>
                            <td className="py-3 px-4 flex justify-end">
                                <button className="text-gray-400 hover:text-gray-200 mr-3">🗑️</button>
                                <button className="text-gray-400 hover:text-gray-200">✏️</button>
                            </td>
                        </tr>
                        {/* Các dòng khác tương tự */}
                    </tbody>
                </table>
                <div className="flex justify-between items-center mt-4">
                    <button className="text-blue-500 hover:text-blue-400">Previous</button>
                    <span className="text-gray-400">Page 1 of 10</span>
                    <button className="text-blue-500 hover:text-blue-400">Next</button>
                </div>
            </div>
            
        </div>
    );
};

export default AllProject;
