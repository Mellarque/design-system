import "@axa-fr/canopee-css/distributeur/FileDownload/FileDownload.css";
import Eye from "@material-symbols/svg-400/outlined/visibility-fill.svg";
import Download from "@material-symbols/svg-400/outlined/download_2-fill.svg";
import Security from "@material-symbols/svg-400/outlined/security-fill.svg";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { Svg } from "../Svg";
import { Title } from "../Title/Title";

export type FileDownloadProps = {
  iconSrc?: string;
  label: string;
  fileName?: string;
  status?: string;
  onDownload?: () => Promise<void>;
  onConsult?: () => Promise<void>;
};

export const FileDownload = ({
  iconSrc = Security,
  fileName,
  label,
  status,
  onDownload,
  onConsult,
}: FileDownloadProps) => {
  return (
    <div className="af-file-download">
      <div className="af-file-download__content">
        <span className="af-file-download__icon">
          <Svg src={iconSrc} />
        </span>
        <div>
          <Title heading="h3">{label}</Title>
          {fileName ? (
            <span className="af-file-download__subtitle">{fileName}</span>
          ) : null}
        </div>
        {status ? (
          <div>
            <Tag>{status}</Tag>
          </div>
        ) : null}
      </div>
      <div className="af-file-download__actions">
        {onConsult ? (
          <Button
            variant="secondary"
            leftIcon={<Svg src={Eye} />}
            onClick={onConsult}
          >
            Consulter
          </Button>
        ) : null}
        {onDownload ? (
          <Button
            variant="secondary"
            leftIcon={<Svg src={Download} />}
            onClick={onDownload}
          >
            Télécharger
          </Button>
        ) : null}
      </div>
    </div>
  );
};

FileDownload.displayName = "FileDownload";
