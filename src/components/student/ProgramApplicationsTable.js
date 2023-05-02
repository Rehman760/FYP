import React from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid';

const STATUS_OPTIONS = [
  { label: 'Pending', icon: <XCircleIcon className="h-5 w-5 text-yellow-500" /> },
  { label: 'Accepted', icon: <CheckCircleIcon className="h-5 w-5 text-green-500" /> },
  { label: 'Rejected', icon: <XCircleIcon className="h-5 w-5 text-red-500" /> },
];

const ProgramApplicationsTable = ({ applications }) => {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">Form</th>
          <th className="px-4 py-2">Program</th>
          <th className="px-4 py-2">University</th>
          <th className="px-4 py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {applications.map((application) => (
          <tr key={application.id}>
            <td className="border px-4 py-2">{application.form}</td>
            <td className="border px-4 py-2">{application.program}</td>
            <td className="border px-4 py-2">{application.university}</td>
            <td className="border px-4 py-2 flex items-center">
              {STATUS_OPTIONS.find((status) => status.label === application.status)?.icon}
              <span className="ml-2">{application.status}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProgramApplicationsTable;
