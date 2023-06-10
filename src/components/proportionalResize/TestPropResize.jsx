import s from "./TestPropResize.module.css";
import ProportionalResize from "./ProportionalResize";

export default function TestPropResize() {
  return (
    <ProportionalResize id={s.resizer}>
      <div id={s.testBox}>
        <h1>Title</h1>
        <p>Lorem ipsum.</p>
      </div>
    </ProportionalResize>
  );
}
