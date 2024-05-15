"use client";

import { Button } from "@/subframe/components/Button";
import { ExploreCard } from "@/subframe/components/ExploreCard";
import { ExploreFeatureCard } from "@/subframe/components/ExploreFeatureCard";
import { IconWithBackground } from "@/subframe/components/IconWithBackground";
import { Tabs } from "@/subframe/components/Tabs";
import { TextField } from "@/subframe/components/TextField";
import * as SubframeCore from "@subframe/core";

function AiTools() {
  return (
    <div className="container max-w-none flex h-full w-full flex-col items-center gap-4 bg-default-background pt-12 pr-6 pb-12 pl-6">
      <div className="flex w-full max-w-[768px] flex-col items-center gap-6">
        <div className="flex w-full max-w-[576px] flex-col items-center justify-center gap-6 pt-6 pr-6 pb-6 pl-6">
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <SubframeCore.Icon
              className="text-heading-1 font-heading-1 text-default-font"
              name="FeatherSparkles"
            />
            <span className="w-full text-heading-1 font-heading-1 text-default-font text-center">
              AI Tools &amp; Resources
            </span>
            <span className="text-body font-body text-subtext-color text-center">
              Discover and create custom AI models to superpower your life,
              business, and creativity all from your computer.
            </span>
          </div>
          <TextField
            className="h-auto w-full flex-none"
            label=""
            helpText=""
            icon="FeatherSearch"
          >
            <TextField.Input placeholder="Search" />
          </TextField>
        </div>
        <div className="flex w-full flex-col items-center gap-12">
          <Tabs>
            <Tabs.Item active={true}>Most popular</Tabs.Item>
            <Tabs.Item active={false}>Top rated</Tabs.Item>
            <Tabs.Item active={false}>New &amp; noteworthy</Tabs.Item>
            <Tabs.Item active={false}>Creative</Tabs.Item>
            <Tabs.Item active={false}>Developer</Tabs.Item>
            <Tabs.Item active={false}>Business</Tabs.Item>
            <Tabs.Item active={false}>Writing</Tabs.Item>
          </Tabs>
          <div className="flex w-full flex-col items-center gap-16">
            <div className="flex w-full flex-col items-start gap-4">
              <div className="flex w-full flex-col items-start gap-1">
                <span className="w-full text-heading-2 font-heading-2 text-default-font">
                  Editor&#39;s picks
                </span>
                <span className="w-full text-body font-body text-subtext-color">
                  Curated selection of the most innovative AI models
                </span>
              </div>
              <div className="flex w-full flex-col items-start gap-4">
                <div className="flex w-full items-start gap-4">
                  <ExploreFeatureCard
                    image="https://res.cloudinary.com/subframe/image/upload/v1711417508/shared/wd5ui3rofpbpbjdltzm2.png"
                    title="chatOG"
                    desc="The original chat AI experience powered by over 3B parameters."
                    metadata="By OG AI"
                  />
                  <ExploreFeatureCard
                    image="https://res.cloudinary.com/subframe/image/upload/v1711417509/shared/ruza1qipiqoaiwdo6vrg.png"
                    title="PICASSO-4"
                    desc="Turn your ideas into reality with the latest text to image generation model."
                    metadata="By Doodlecraft"
                  />
                </div>
                <div className="flex w-full items-start gap-4">
                  <ExploreFeatureCard
                    image="https://res.cloudinary.com/subframe/image/upload/v1711417510/shared/esj02idt9sf1mhn7xuw8.png"
                    title="Track Attack"
                    desc="Zoom to the finish line faster than the competition by analying every move."
                    metadata="By Furiously Fast Inc."
                  />
                  <ExploreFeatureCard
                    image="https://res.cloudinary.com/subframe/image/upload/v1711417511/shared/t4qorgih4yjwudzjfkxq.png"
                    title="Privacy Dodger"
                    desc="Tailor who sees what, putting you in charge of your online space."
                    metadata="By Anonymous"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-4">
              <div className="flex w-full flex-col items-start gap-1">
                <span className="w-full text-heading-2 font-heading-2 text-default-font">
                  Popular this week
                </span>
                <span className="w-full text-body font-body text-subtext-color">
                  Most downloaded models in the last 7 days
                </span>
              </div>
              <div className="flex w-full flex-col items-start gap-1">
                <div className="flex w-full items-start gap-4">
                  <ExploreCard
                    count="1"
                    title="PICASSO-4"
                    desc="Turn your ideas into reality with the latest text to image generation model."
                    metadata="By Doodlecraft"
                  >
                    <IconWithBackground
                      variant="success"
                      size="large"
                      icon="FeatherPalette"
                    />
                  </ExploreCard>
                  <ExploreCard
                    count="2"
                    title="Data Drift"
                    desc="Analyze and visualize your data easily. Just upload your files and get insights in moments."
                    metadata="By DataWiz"
                  >
                    <IconWithBackground
                      variant="warning"
                      size="large"
                      icon="FeatherPieChart"
                    />
                  </ExploreCard>
                </div>
                <div className="flex w-full items-start gap-4">
                  <ExploreCard
                    count="3"
                    title="Rulemaster"
                    desc="Quick explanations of board and card games for all ages. Let's make game time fun and easy!"
                    metadata="By GameGuide AI"
                  >
                    <IconWithBackground size="large" icon="FeatherDices" />
                  </ExploreCard>
                  <ExploreCard
                    count="4"
                    title="NegotiatePro"
                    desc="Know your worth and let AI do the talking so you can maximize your offer."
                    metadata="By CIA"
                  >
                    <IconWithBackground
                      variant="error"
                      size="large"
                      icon="FeatherBriefcase"
                    />
                  </ExploreCard>
                </div>
                <div className="flex w-full items-start gap-4">
                  <ExploreCard
                    count="5"
                    title="Doodle Maker"
                    desc="Trained on billions of MS Paint examples, Doodle Maker makes your pixels shine."
                    metadata="By Pablo"
                  >
                    <IconWithBackground
                      variant="neutral"
                      size="large"
                      icon="FeatherBrush"
                    />
                  </ExploreCard>
                  <ExploreCard
                    count="6"
                    title="Privacy Dodger"
                    desc="Tailor who sees what, putting you in charge of your online space."
                    metadata="By Anonymous"
                  >
                    <IconWithBackground size="large" icon="FeatherEye" />
                  </ExploreCard>
                </div>
                <Button
                  className="h-10 w-full flex-none"
                  variant="neutral-secondary"
                  size="large"
                >
                  See all
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiTools;