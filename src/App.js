import './App.css';
import {Checkbox, MantineProvider, NativeSelect} from '@mantine/core';
import "@mantine/core/styles.css";

function App() {
    return (
        <MantineProvider>
            <div className="App">

                <Checkbox
                    defaultChecked
                    label="I agree to sell my privacy"
                />
                <NativeSelect
                    data={[
                        {
                            group: 'Frontend libraries',
                            items: [
                                {label: 'React', value: 'react'},
                                {label: 'Angular', value: 'angular'},
                                {label: 'Vue', value: 'vue', disabled: true},
                            ],
                        },
                        {
                            group: 'Backend libraries',
                            items: [
                                {label: 'Express', value: 'express'},
                                {label: 'Koa', value: 'koa'},
                                {label: 'Django', value: 'django'},
                            ],
                        },
                    ]}
                />


            </div>
        </MantineProvider>
    );
}

export default App;
