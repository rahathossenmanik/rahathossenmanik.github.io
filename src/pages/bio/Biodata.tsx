import React from "react";

const Biodata = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Biodata Form
        </h2>
        <form className="space-y-8">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Marital Status
            </label>
            <select
              id="marital_status"
              name="marital_status"
              className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select...</option>
              <option value="unmarried">Unmarried</option>
              <option value="married">Married</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Height
              </label>
              <input
                type="text"
                id="height"
                name="height"
                className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., 5'8&quot;"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Weight
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., 70 kg"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Blood Group
              </label>
              <input
                type="text"
                id="blood_group"
                name="blood_group"
                className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., A+"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Nationality
              </label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Bangladeshi"
                required
              />
            </div>
          </div>
          {/* <!-- Personal Info Section --> */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Marital Status
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500">
                  <option>Unmarried</option>
                  <option>Married</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <input
                  type="month"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Height
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="5′ 4″"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Weight
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="67 kg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Blood Group
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="A+"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nationality
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Bangladeshi"
                />
              </div>
            </div>
          </div>

          {/* <!-- Address Section --> */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Address Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Permanent Address
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Faridpur Sadar, Faridpur"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Current Address
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Uttara, Dhaka"
                />
              </div>
            </div>
          </div>

          {/* <!-- Education Section --> */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Educational Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Highest Degree
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="B.Sc in Computer Science"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Institution
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="University of Rajshahi"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Passing Year
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="2022"
                />
              </div>
            </div>
          </div>

          {/* <!-- Family Information --> */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Family Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Father's Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Amzad Sheikh"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Father's Occupation
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Paralyzed"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Mother's Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Rahela Begum"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Mother's Occupation
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Housewife"
                />
              </div>
            </div>
          </div>

          {/* <!-- Submit Button --> */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Biodata;
