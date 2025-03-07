import React, { useState } from 'react';
import axios from 'axios';
import { LuSettings2 } from "react-icons/lu";

<LuSettings2 />
interface SettingsProps {
  onClose: () => void;
}

const Settings: React.FC<SettingsProps> = ({ onClose }) => {
  const [category, setCategory] = useState('general');
  const [language, setLanguage] = useState('en');
  const [country, setCountry] = useState('za');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/news/update-settings', {
        category,
        language,
        country,
      });
      console.log('Settings updated:', response.data);
      setIsOpen(false);
    } catch (error) {
      console.error('Error updating settings:', error);
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <LuSettings2 size={20} />
      </button>


      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-lg w-96 z-60 relative">
            <h2 className="text-xl font-bold mb-4">Settings</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label>Category:</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="business">Business</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="general">General</option>
                  <option value="health">Health</option>
                  <option value="science">Science</option>
                  <option value="sports">Sports</option>
                  <option value="technology">Technology</option>
                </select>
              </div>
              <div className="mb-4">
                <label>Language:</label>
                <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                  <option value="ar">Arabic</option>
                  <option value="de">German</option>
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="he">Hebrew</option>
                  <option value="it">Italian</option>
                  <option value="nl">Dutch</option>
                  <option value="no">Norwegian</option>
                  <option value="pt">Portuguese</option>
                  <option value="ru">Russian</option>
                  <option value="sv">Swedish</option>
                  <option value="ud">Urdu</option>
                  <option value="zh">Chinese</option>
                </select>
              </div>
              <div className="mb-4">
                <label>Country:</label>
                <select value={country} onChange={(e) => setCountry(e.target.value)}>
                  <option value="ae">United Arab Emirates</option>
                  <option value="ar">Argentina</option>
                  <option value="at">Austria</option>
                  <option value="au">Australia</option>
                  <option value="be">Belgium</option>
                  <option value="bg">Bulgaria</option>
                  <option value="br">Brazil</option>
                  <option value="ca">Canada</option>
                  <option value="ch">Switzerland</option>
                  <option value="cn">China</option>
                  <option value="co">Colombia</option>
                  <option value="cu">Cuba</option>
                  <option value="cz">Czech Republic</option>
                  <option value="de">Germany</option>
                  <option value="eg">Egypt</option>
                  <option value="fr">France</option>
                  <option value="gb">United Kingdom</option>
                  <option value="gr">Greece</option>
                  <option value="hk">Hong Kong</option>
                  <option value="hu">Hungary</option>
                  <option value="id">Indonesia</option>
                  <option value="ie">Ireland</option>
                  <option value="il">Israel</option>
                  <option value="in">India</option>
                  <option value="it">Italy</option>
                  <option value="jp">Japan</option>
                  <option value="kr">South Korea</option>
                  <option value="lt">Lithuania</option>
                  <option value="lv">Latvia</option>
                  <option value="ma">Morocco</option>
                  <option value="mx">Mexico</option>
                  <option value="my">Malaysia</option>
                  <option value="ng">Nigeria</option>
                  <option value="nl">Netherlands</option>
                  <option value="nz">New Zealand</option>
                  <option value="ph">Philippines</option>
                  <option value="pl">Poland</option>
                  <option value="pt">Portugal</option>
                  <option value="ro">Romania</option>
                  <option value="rs">Serbia</option>
                  <option value="ru">Russia</option>
                  <option value="sa">Saudi Arabia</option>
                  <option value="se">Sweden</option>
                  <option value="sg">Singapore</option>
                  <option value="si">Slovenia</option>
                  <option value="sk">Slovakia</option>
                  <option value="th">Thailand</option>
                  <option value="tr">Turkey</option>
                  <option value="tw">Taiwan</option>
                  <option value="ua">Ukraine</option>
                  <option value="us">United States</option>
                  <option value="ve">Venezuela</option>
                  <option value="za">South Africa</option>
                </select>
              </div>
              <div className="flex justify-end gap-2">
                <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};


export default Settings;