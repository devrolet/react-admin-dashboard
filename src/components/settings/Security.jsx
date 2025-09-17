import { Lock } from "lucide-react"
import { useState } from "react"
import ToggleSwitch from "../common/ToggleSwitch"
import SettingsSection from "./SettingsSection"

const Security = () => {
  const [twoFactor, setTwoFactor] = useState(false);
  return (
    <SettingsSection icon={Lock} title={"Security"}>
      <ToggleSwitch
        label={"Two-Factor Authentication"}
        isOn={twoFactor}
        onToggle={() => setTwoFactor(!twoFactor)}
      />
      <div className="mt-4">
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-200">Change Password</button>
      </div>

    </SettingsSection>
  )
}

export default Security