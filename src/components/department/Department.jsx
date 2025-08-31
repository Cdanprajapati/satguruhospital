import React from "react";
import {
  User,
  Heart,
  Stethoscope,
  Activity,
  UserCheck,
  Zap,
} from "lucide-react";

const HospitalDepartments = () => {
  const departments = [
    {
      title: "General Medicine",
      icon: <Stethoscope className="w-6 h-6" />,
      doctors: [
        {
          name: "Dr. S.P.",
          qualification: "M.D., EH Delhi",
          specialty: "General Physician",
        },
        {
          name: "Dr. Vimlesh Tiwari",
          qualification: "M.D.",
          specialty: "Physician",
        },
        {
          name: "Dr. M.P. Singh",
          qualification: "M.B.B.S., DP Card",
          specialty: "General Physician",
        },
      ],
    },
    {
      title: "Surgery Department",
      icon: <Activity className="w-6 h-6" />,
      doctors: [
        {
          name: "Dr. R.K. Yadav",
          qualification: "M.S.",
          specialty: "General and Laparoscopic Surgeon",
        },
      ],
    },
    {
      title: "Women's Health & Diagnostics",
      icon: <UserCheck className="w-6 h-6" />,
      doctors: [
        {
          name: "Dr. Ranjeeta Singh",
          qualification: "M.D. (AY)",
          specialty: "Diagnostics, Stri Rog Viseshagya (Gynecology)",
        },
      ],
    },
    {
      title: "Cardiology",
      icon: <Heart className="w-6 h-6" />,
      doctors: [
        {
          name: "Heart Specialist",
          qualification: "Heart Rog Viseshagya",
          specialty: "Cardiovascular Medicine",
        },
      ],
    },
    {
      title: "Physiotherapy",
      icon: <Zap className="w-6 h-6" />,
      doctors: [
        {
          name: "Dr. Ankita",
          qualification: "Senior Physiotherapist",
          specialty: "Physical Rehabilitation",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 via-teal-600 to-teal-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
            Satguru Hospital
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Comprehensive Healthcare Services with Expert Medical Professionals
          </p>
          <div className="mt-8 flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-lg font-medium">
                Our Medical Departments
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Departments Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((department, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Department Header */}
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-t-2xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                    {department.icon}
                  </div>
                  <h3 className="text-xl font-bold">{department.title}</h3>
                </div>
              </div>

              {/* Doctors List */}
              <div className="p-6">
                {department.doctors.map((doctor, doctorIndex) => (
                  <div
                    key={doctorIndex}
                    className="bg-gray-50 rounded-xl p-4 mb-4 last:mb-0 hover:bg-blue-50 transition-colors duration-200 border-l-4 border-teal-500"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 p-2 rounded-full mt-1">
                        <User className="w-4 h-4 text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">
                          {doctor.name}
                        </h4>
                        <p className="text-sm text-teal-600 font-medium mb-1">
                          {doctor.qualification}
                        </p>
                        <p className="text-sm text-gray-600">
                          {doctor.specialty}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HospitalDepartments;
